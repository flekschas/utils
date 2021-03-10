/**
 * Clone an event by invoking the source event's constructor and passing in
 *   the source event.
 *
 * @param {object} event - Source event to be cloned.
 * @return {object} Cloned event
 */
export const cloneEvent = (event) => {
  const newEvent = new event.constructor(event.type, event);
  newEvent.sourceUid = event.sourceUid;
  newEvent.forwarded = event.forwarded;

  return newEvent;
};

/**
 * Forward an event by cloning and dispatching it.
 * @param {object} event - Event to be forwarded.
 * @param {object} target - Target HTML element for the event.
 */
export const forwardEvent = (event, target) => {
  target.dispatchEvent(cloneEvent(event));
};
