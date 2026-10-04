import WorkoutDetailsCard from "@/app/components/cards/WorkoutDetailsCard";

export interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <>
      <WorkoutDetailsCard key={id} id={id}></WorkoutDetailsCard>
    </>
  );
}
