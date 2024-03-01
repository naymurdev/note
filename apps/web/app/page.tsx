import Menu from "@/ui/menu";
import Editor from "@/ui/editor";
import Draw from "@/ui/draw";

export default function Page() {
  return (
    <div className="h-screen ">
      {/* <a
        href="https://github.com/steven-tey/novel"
        target="_blank"
        className="absolute bottom-5 left-5 z-10 max-h-fit rounded-lg p-2 transition-colors duration-200 hover:bg-stone-100 sm:bottom-auto sm:top-5"
      >
        <Github />
      </a> */}
      <Menu />
      <div className="grid h-full grid-cols-2">
        <Editor />
        <Draw />
      </div>
    </div>
  );
}
