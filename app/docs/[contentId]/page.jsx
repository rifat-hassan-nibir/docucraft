import ContentDisplay from "@/components/ContentDisplay";

async function ContentPage({ params }) {
  const { contentId } = await params;

  return (
    <div>
      <ContentDisplay id={contentId} />
    </div>
  );
}

export default ContentPage;
