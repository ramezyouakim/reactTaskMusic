export function filteredArr(array) {
    return array.reduce((acc, current) => {
        const x = acc.find(item => item.track.artists[0].name === current.track.artists[0].name);
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, [])
}

export function compare(a, b) {
    const A = a.track.artists[0].name.toUpperCase();
    const B = b.track.artists[0].name.toUpperCase();
    let comparison = 0;
    if (A > B) {
        comparison = 1;
    } else if (A < B) {
        comparison = -1;
    }
    return comparison;
}