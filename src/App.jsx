import React from "react";

const App = () => {
  return (
    <section className="grid gap-8 md:grid-cols-2 md:items-center md:text-left sm:max-xl:bg-blue-50 3xl:bg-fuchsia-200">
      <div>
        <img
          src="https://img.freepik.com/free-photo/3d-render-tropical-landscape-with-palm-trees-blue-sea_1048-6386.jpg?w=1380&t=st=1703144715~exp=1703145315~hmac=da924c8129775f9a98c81fe87e7caebafc34633cd0338c970dbd709110aed956"
          alt=""
          className="w-full rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-4xl font-medium mb-2">Headline</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          voluptate dolores soluta dicta quis nisi, sed velit. Molestiae
          veritatis vero blanditiis expedita, ratione voluptate quos recusandae!
          Adipisci quas veritatis nostrum?
        </p>
      </div>
    </section>
  );
};

export default App;
