module.exports = async (ctx, db) => {
  const { parentId, type } = ctx.params;

  const res = await db
    .collection("ingredients")
    .find({ parentId, groupCode: type })
    .toArray();

  ctx.body = res;
};
