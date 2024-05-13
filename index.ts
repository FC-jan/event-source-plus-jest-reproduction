import { EventSourcePlus } from 'event-source-plus';

const url = new URL('http://127.0.0.1');
const token = 'abc';

export default async () => {
    const eventSource = new EventSourcePlus(url.toString(), {
      headers: { Authorization: `Bearer ${token}` },
      maxRetryCount: 10,
      maxRetryInterval: 10 * 60 * 1000,
    });
    const controller = eventSource.listen({
        onMessage: console.log,
    });
    return true;
}
