const MongoClient = require("mongodb").MongoClient;

const dbUrl = "mongodb://localhost:27017";
const dbName = "mixme";

MongoClient.connect(dbUrl, async (err, client) => {
  const db = client.db(dbName);

  db.collection("cocktails").updateMany(
    {},
    {
      // $rename: {
      //   iba_category: "ibaCategory",
      //   i_title: "name",
      //   parent_name: "parentName",
      //   i_src: "src",
      //   parent_id: "parentId",
      //   i_link: "link",
      //   group_name: "groupName",
      //   group_code: "groupCode",
      //   is_brand: "isCommon",
      //   brand_parent: "brandParent",
      //   is_common: "isCommon",
      //   src_thumb: "srcThumb",
      // },
      $unset: {
        alternate: "",
        //   i_isuseradded: "",
        //   inmybar: "",
        //   numberinmybar: "",
        //   addedby_uid: "",
      },
    },
    // $set: {
    //   isCommon: false,
    // },
  );
});
