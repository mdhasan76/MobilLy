const { useState, useEffect } = require("react")

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [sellerLoading, setSellerLoasding] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://doctors-portal-server-mdhasan76.vercel.app/dashboard/allusers/${email}`)
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