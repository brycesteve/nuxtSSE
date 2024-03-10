/**
 * This composable automatically connects to the server to receive any events sent from useServerEvents() composable.
 * @param clientId An optional clientId to identify the connection
 * @returns an EventSource object
 */
export const useServerEventsClient = (clientId?: any) => {
  const evt = new EventSource(`/event-stream?clientId=${clientId}`);

  return evt
}
