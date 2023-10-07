import express from "express";

const app = express();
const port = 9000;
app.use("/", (req, res) => {
    res.json({message:"Hello From Express!"})
})

app.listen(9000, () => {
    console.log(`Running Server on ${port}`);
})