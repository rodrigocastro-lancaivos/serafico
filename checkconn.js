async function run(client){
    try {
        await client.connect();
        await client.db("admin").command({ping: 1})
        console.log("Conectado ao banco.")
    } catch (e) {
        console.log(e);
    } finally {
        await client.close();
    }
}

module.exports = run