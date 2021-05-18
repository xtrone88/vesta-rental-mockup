const yyyymmdd = (d) => {
    var mm = d.getMonth() + 1;
    var dd = d.getDate();

    return [
        d.getFullYear(),
        (mm > 9 ? "" : "0") + mm,
        (dd > 9 ? "" : "0") + dd,
    ].join("-");
};

export default {
    yyyymmdd
}