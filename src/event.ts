/**
 * Clone an event by invoking the source event's constructor and passing in
 * the source event.
 *
 * @param event - Source event to be cloned.
 * @return Cloned event
 */
export const cloneEvent = (event: Event): Event => {
	// biome-ignore lint/suspicious/noExplicitAny: Event constructor is callable but TS doesn't know
	const newEvent = new (event.constructor as any)(event.type, event);

	if ("sourceUid" in event) {
		// biome-ignore lint/suspicious/noExplicitAny: custom property kept for backwards compatibility
		(newEvent as any).sourceUid = (event as any).sourceUid;
	}
	if ("forwarded" in event) {
		// biome-ignore lint/suspicious/noExplicitAny: custom property kept for backwards compatibility
		(newEvent as any).forwarded = (event as any).forwarded;
	}

	return newEvent;
};

/**
 * Forward an event by cloning and dispatching it.
 * @param event - Event to be forwarded.
 * @param target - Target HTML element for the event.
 */
export const forwardEvent = (event: Event, target: HTMLElement) => {
	target.dispatchEvent(cloneEvent(event));
};
