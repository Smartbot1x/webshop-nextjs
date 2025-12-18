export async function fetchFromDummyJSON(limit = 3, skip = 0) {
    const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
        { cache: "no-store", next: { revalidate: 0 } }
    );
    if (!res.ok) throw new Error("DummyJSON failed");
    const data = await res.json();
    return (data.products || []).map((p) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        image: p.thumbnail,
        source: "dummyjson",
    }));
}

export async function fetchFromFakeStore(limit = 3) {
    const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`,
        { cache: "no-store", next: { revalidate: 0 } }
    );
    if (!res.ok) throw new Error("FakeStore failed");
    const data = await res.json();
    return (data || []).map((p) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        image: p.image,
        source: "fakestore",
    }));
}

export async function fetchProducts({ limit = 3, skip = 0 } = {}) {
    // Try DummyJSON, then FakeStore as a fallback
    try {
        return await fetchFromDummyJSON(limit, skip);
    } catch {
        try {
            return await fetchFromFakeStore(limit);
        } catch {
            return [];
        }
    }
}

