module.exports = async (ctx, db) => {
  const { parentId, type } = ctx.params;
  let searchParams = {};

  if (type === "PO") {
    searchParams = {
      isCommon: true,
    };
  } else {
    searchParams = {
      parentId,
      groupCode: type,
    };
  }

  const res = await db
    .collection("ingredients")
    .find({ ...searchParams })
    .toArray();

  ctx.body = res;
};
