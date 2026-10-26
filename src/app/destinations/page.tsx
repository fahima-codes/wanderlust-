import { type Destination } from './card';
import { fetchDestinations } from './api';
import { SAMPLE_DESTINATIONS } from './sample-data';
import DestinationsView from './view';

export default async function DestinationsPage() {
  const destinations = await loadDestinations();
  return <DestinationsView destinations={destinations} />;
}

async function loadDestinations(): Promise<Destination[]> {
  try {
    return await fetchDestinations();
  } catch {
    // Backend dev server (port 8000) not running — fall back to sample data
    return SAMPLE_DESTINATIONS;
  }
}
