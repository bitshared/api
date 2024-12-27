const block = {
    level: function () {
        const data = Array(12).fill(
            Array(31).fill([])
        )

        console.log(data)
    },
    tb: function () {
        const th = ["time", "from", "category", "subcategory", "quantity", "price", "fee", "exprice", "note"]
        const td = Array(th.length).fill([])
        console.log(td)
    }

}

block.tb()