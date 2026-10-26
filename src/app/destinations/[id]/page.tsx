import DestinationDetails from './details';
import { fetchDestination } from '../api';

export default async function DestinationDetailsPage({
  params,
}: PageProps<'/destinations/[id]'>) {
  const { id } = await params;
  const destination = await fetchDestination(id);
  return <DestinationDetails destination={destination} id={id} />;
}
