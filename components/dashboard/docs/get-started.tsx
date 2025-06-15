import { Separator } from "@/components/ui/separator";


function GetStarted() {
  return (
    <section className="flex justify-center">
      <div className="space-y-5 xl:w-[80%]">
        <div className="space-y-5">
          <h2 className="font-semibold text-2xl">Getting Started</h2>
          <p>Welcome to RESSANN/Learn documentation!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cumque enim nesciunt veritatis accusamus quibusdam nemo nostrum sed tempora dolores harum eaque dicta ipsam ad possimus officia nisi, placeat hic?</p>
        </div>
        <Separator className="w-full my-5"/>
        <div className="space-y-5">
          <h3 className="text-xl font-semibold">Pre-requisite device or tools</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia commodi ratione inventore recusandae ducimus itaque repellat eveniet quo aspernatur fugiat, sapiente possimus minima ad earum cupiditate perspiciatis iure nam consectetur!</p>
          <ul className="list-['-__'] ml-5 space-y-2">
            <li>TP-Link Router</li>
            <li>Unifi</li>
            <li>Ruijie</li>
            <li>Mikrotik RouterOS</li>
            <li>Huawei Switch</li>
            <li>VMWare install on your computer</li>
            <li>EVE NG</li>
            <li>Computer</li>
          </ul>
        </div>
        <Separator className="w-full my-5"/>
        <div className="space-y-5">
          <h3 className="text-xl font-semibold">Installation guide</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia commodi ratione inventore recusandae ducimus itaque repellat eveniet quo aspernatur fugiat, sapiente possimus minima ad earum cupiditate perspiciatis iure nam consectetur!</p>
          <ul className="list-['-__'] ml-5 space-y-2">
            <li>Install VMWare on Windows</li>
            <li>Install EVE NG on VMWare</li>
            <li>Install Mikrotik router in EVE-NG</li>
            <li>Install eNSP on Windows</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;