export interface Category {
    id: number;
    name: string;
    image: string;
    category_products: {
        categoryId: number;
        productId: number;
    };
}

export interface Product {
    id: number;
    name: string;
    price: number;
    material?: string;
    description?: string;
    image: string;
    category?: Category[];
}
export interface Select {
    title: string;
    value: string | number;
}

export interface ProductCart extends Product {
    quantity: number;
    size: string;
}
