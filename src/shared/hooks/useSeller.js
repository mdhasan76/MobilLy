const { useState, useEffect } = require("react")

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [sellerLoading, setSellerLoasding] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_URL}/dashboard/allusers/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsSeller(data.isSeller)
                    setSellerLoasding(false)
                })
        }
    }, [email])
    return [isSeller, sellerLoading]
}
export default useSeller;