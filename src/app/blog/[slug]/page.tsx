"useClient";

type tParams = Promise<{ slug: string }>;
export default async function Page({ params }: { params: tParams }) {
  const { slug } = await params;

  return (
    <div className="h-screen">
      <h3>{slug}</h3>
    </div>
  );
}
