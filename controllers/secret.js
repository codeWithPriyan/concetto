
exports.getKeySecret = async (req, res) => {
    const keySecret = ({
        eventName:"ARCHITECTURA: Bid, Visualise, Design",
        key: "concetto",
        secret: "2023"
    });
    res.status(200).json(keySecret);
};