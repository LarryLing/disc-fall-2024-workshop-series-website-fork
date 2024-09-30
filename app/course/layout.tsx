import { CourseLeftbar } from "@/components/CourseLeftbar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-10">
      <CourseLeftbar key="leftbar" />
      <div className="flex-[4]">{children}</div>{" "}
    </div>
  );
}