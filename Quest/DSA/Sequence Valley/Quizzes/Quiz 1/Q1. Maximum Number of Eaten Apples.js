var eatenApples = function(apples, days) {
    const heap = [];

    const push = (val) => {
        heap.push(val);
        let i = heap.length - 1;
        while (i > 0) {
            const parent = (i - 1) >> 1;
            if (heap[parent][0] > heap[i][0]) {
                [heap[parent], heap[i]] = [heap[i], heap[parent]];
                i = parent;
            } else break;
        }
    };

    const pop = () => {
        const top = heap[0];
        const last = heap.pop();
        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;
            while (true) {
                let smallest = i;
                const l = 2 * i + 1, r = 2 * i + 2;
                if (l < heap.length && heap[l][0] < heap[smallest][0]) smallest = l;
                if (r < heap.length && heap[r][0] < heap[smallest][0]) smallest = r;
                if (smallest === i) break;
                [heap[smallest], heap[i]] = [heap[i], heap[smallest]];
                i = smallest;
            }
        }
        return top;
    };

    let eaten = 0;
    let i = 0;

    while (i < apples.length || heap.length > 0) {
        if (i < apples.length && apples[i] > 0) {
            push([i + days[i], apples[i]]);
        }

        while (heap.length > 0 && heap[0][0] <= i) {
            pop();
        }

        if (heap.length > 0) {
            const top = pop();
            eaten++;
            if (top[1] - 1 > 0) {
                push([top[0], top[1] - 1]);
            }
        }

        i++;
    }

    return eaten;
};