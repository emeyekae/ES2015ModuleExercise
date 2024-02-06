
/*  choice(items): returns a randomly selected item from array of items */

function choice(items) {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

/*remove(items, item): removes the first matching item from items, 
if item exists, and returns it. Otherwise returns undefined. */

function remove(item, items) {
    for (let x = 0; x < items.length; x++) {
        if (items[x] === item) {
            return [...items.slice(0,x), ...items.slice(x +1)] ;
        }
    }
}

export {choice, remove};