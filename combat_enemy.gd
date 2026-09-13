# CombatEnemy — enemy AI excerpt (GDScript).
# Selected functions from the full CharacterBody2D script; not standalone.
# State, EnemyData, node references, member variables, and change_state are omitted.
# The physics loop, attack execution, health, and animation code are also omitted.


# Choose the next state using distance, attack availability, and combat preference.
func choose_next_state() -> void:
	reset_decision_timer()

	var distance: float = global_position.distance_to(
		target.global_position
	)

	if distance > data.disengage_distance:
		change_state(State.IDLE)
		return

	if not has_melee_attack() and not has_ranged_attack():
		change_state(State.IDLE)
		return

	if is_effectively_melee_priority():
		choose_melee_priority_state(distance)
		return

	choose_ranged_priority_state(distance)

func choose_melee_priority_state(distance: float) -> void:
	if distance > data.melee_exit_range:
		if can_start_ranged_attack() and random.randf() <= data.ranged_attack_chance:
			change_state(State.RANGED_ATTACK)
		else:
			change_state(State.APPROACH)
		return

	if (
		distance <= data.melee_range
		and can_start_melee_attack()
		and random.randf() <= data.melee_attack_chance
	):
		change_state(State.MELEE_ATTACK)
		return

	if (
		melee_attacks_since_retreat >= data.melee_attacks_before_retreat
		and can_start_retreat()
	):
		change_state(State.RETREAT)
		return

	change_state(State.STRAFE)

func choose_ranged_priority_state(distance: float) -> void:
	var minimum_distance: float = get_minimum_ranged_distance()
	var maximum_distance: float = get_maximum_ranged_distance()

	if distance > maximum_distance:
		change_state(State.APPROACH)
		return

	if distance < minimum_distance:
		if distance <= data.melee_range and can_start_melee_attack():
			change_state(State.MELEE_ATTACK)
		elif can_start_retreat():
			change_state(State.RETREAT)
		else:
			change_state(State.STRAFE)
		return

	if can_start_ranged_attack() and random.randf() <= data.ranged_attack_chance:
		change_state(State.RANGED_ATTACK)
	else:
		change_state(State.STRAFE)


# Approach the target or strafe with a correction toward the preferred distance.
func run_approach(delta: float) -> void:
	var distance: float = global_position.distance_to(
		target.global_position
	)

	if is_effectively_melee_priority():
		if distance <= data.melee_entry_range:
			choose_next_state()
			return
	else:
		if distance <= get_maximum_ranged_distance():
			change_state(State.STRAFE)
			return

	move_toward_navigation_target(
		target.global_position,
		data.move_speed,
		delta
	)

func run_strafe(delta: float) -> void:
	if update_blocked_movement(delta):
		strafe_direction *= -1.0
		blocked_movement_time = 0.0

	if strafe_time_remaining <= 0.0:
		begin_new_strafe()

	var direction_to_target := global_position.direction_to(
		target.global_position
	)

	var distance := global_position.distance_to(
		target.global_position
	)

	# Perpendicular direction creates sideways circling.
	var sideways_direction := Vector2(
		-direction_to_target.y,
		direction_to_target.x
	) * strafe_direction

	var desired_distance: float = current_preferred_distance

	if is_effectively_melee_priority():
		desired_distance = maxf(
			data.melee_range - 2.0,
			0.0
		)

	var distance_error := distance - desired_distance

	# A small amount of inward or outward movement keeps the enemy
	# near its preferred combat distance.
	var correction: float = clampf(
		distance_error / 35.0,
		-1.0,
		1.0
	)

	var distance_correction: Vector2 = direction_to_target * correction

	var desired_direction: Vector2 = (
		sideways_direction
		+ distance_correction * 0.65
	).normalized()

	var desired_velocity: Vector2 = (
		desired_direction
		* data.move_speed
		* data.strafe_speed_multiplier
	)

	velocity = velocity.move_toward(
		desired_velocity,
		data.acceleration * delta
	)

func move_toward_navigation_target(
	destination: Vector2,
	speed: float,
	delta: float
) -> void:
	navigation_agent.target_position = destination

	var next_path_position := (
		navigation_agent.get_next_path_position()
	)

	var movement_direction := global_position.direction_to(
		next_path_position
	)

	var desired_velocity := movement_direction * speed

	velocity = velocity.move_toward(
		desired_velocity,
		data.acceleration * delta
	)


# Track blocked movement and vary strafe timing and preferred distance.
func update_blocked_movement(delta: float) -> bool:
	var tried_to_move: bool = velocity.length_squared() > 25.0
	var barely_moved: bool = get_last_motion().length_squared() < 0.25
	var hit_obstacle: bool = get_slide_collision_count() > 0

	if tried_to_move and (barely_moved or hit_obstacle):
		blocked_movement_time += delta
	else:
		blocked_movement_time = 0.0

	return (
		blocked_movement_time
		>= data.blocked_movement_reconsider_time
	)

func begin_new_strafe() -> void:
	strafe_time_remaining = random.randf_range(
		data.minimum_strafe_time,
		data.maximum_strafe_time
	)

	if (
		random.randf()
		<= data.strafe_direction_change_chance
	):
		strafe_direction *= -1.0

func choose_new_preferred_distance() -> void:
	current_preferred_distance = (
		data.preferred_distance
		+ random.randf_range(
			-data.preferred_distance_variation,
			data.preferred_distance_variation
		)
	)

	current_preferred_distance = max(
		current_preferred_distance,
		data.melee_exit_range + data.preferred_distance_tolerance
	)


# Check attack availability, cooldowns, combat preference, and ranged distances.
func has_melee_attack() -> bool:
	return (
		data.can_melee
		and melee_hitbox != null
		and melee_collision != null
	)

func has_ranged_attack() -> bool:
	return (
		data.can_use_ranged_attack
		and data.projectile_scene != null
		and projectile_spawn != null
	)

func can_start_melee_attack() -> bool:
	return has_melee_attack() and melee_cooldown_remaining <= 0.0

func can_start_ranged_attack() -> bool:
	return has_ranged_attack() and ranged_cooldown_remaining <= 0.0

func can_start_retreat() -> bool:
	return retreat_cooldown_remaining <= 0.0

func is_effectively_melee_priority() -> bool:
	if not has_ranged_attack():
		return has_melee_attack()

	if not has_melee_attack():
		return false

	return data.combat_preference == EnemyData.CombatPreference.MELEE

func get_minimum_ranged_distance() -> float:
	return maxf(
		0.0,
		current_preferred_distance - data.preferred_distance_tolerance
	)

func get_maximum_ranged_distance() -> float:
	return minf(
		data.maximum_ranged_distance,
		current_preferred_distance + data.preferred_distance_tolerance
	)

func reset_decision_timer() -> void:
	decision_time_remaining = random.randf_range(
		data.minimum_decision_time,
		data.maximum_decision_time
	)
