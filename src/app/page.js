import DemoSection from "@/components/DemoSection";
import PageHeaders from "@/components/PageHeaders";
import UploadForm from "@/components/UploadForm";

export default function Home() {
  return (
    <>
      <PageHeaders/>
      <div className="text-center">
        <UploadForm/>
      </div>
      <DemoSection/>
    </>
  );
}
