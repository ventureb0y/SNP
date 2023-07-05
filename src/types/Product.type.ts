export type Product = {
    id: number,
    attributes: {
        name: string,
        price: number,
        old_price: number,
        description: string,
        dies: string,
        images: {
            data: [
                {
                    attributes: {
                        url: string
                    }
                }
            ]
        }
  }
}