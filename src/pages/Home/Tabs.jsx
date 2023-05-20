import { Tab, TabList, TabPanel } from "react-tabs";


const Tabs = () => {
  return (
    <div>
  <Tabs>
    <TabList>
      <Tab>Science Kits</Tab>
      <Tab>Language learning kits</Tab>
      <Tab>Engineering kit</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sed doloremque officiis esse dolorem repudiandae animi ad aspernatur maxime ullam? Laudantium placeat molestiae corporis quis sit, cum in ipsum labore, reiciendis quod consequatur possimus at dolores vitae odit ratione mollitia eius. Reiciendis non corrupti sapiente expedita. Deserunt sunt asperiores porro.</p>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque doloremque beatae repellendus! Tempora tenetur modi iure officia facere eligendi repudiandae tempore quia fugiat amet, omnis corrupti similique corporis illum expedita labore veniam deserunt a voluptatem dicta molestiae cumque vitae esse minima! Sit libero laborum id ad excepturi dolor non consequatur.</p>
    </TabPanel>
  </Tabs>

    </div>
  );
};

export default Tabs;