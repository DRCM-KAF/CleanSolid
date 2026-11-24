(() => {

    // Modelo del producto
    interface Product {
        id: number;
        name: string;
    }

    // 1. Gestionar productos
    class ProductBloc {

        loadProduct(id: number): Product {
            const product: Product = {
                id,
                name: 'OLED TV'
            };

            console.log('Producto:', product);

            return product;
        }

        saveProduct(product: Product): void {
            console.log('Guardando en base de datos:', product);
        }
    }

    // 2. Gestionar notificaciones
    class NotificationService {

        notifyClients(): void {
            console.log('Enviando correo a los clientes');
        }
    }

    // 3. Gestionar el carrito de compras
    class CartBloc {

        onAddToCart(productId: number): void {
            console.log('Agregando al carrito:', productId);
        }
    }

    // Crear objetos
    const productBloc = new ProductBloc();
    const notificationService = new NotificationService();
    const cartBloc = new CartBloc();

    // Ejecutar funcionalidades
    const product = productBloc.loadProduct(10);

    productBloc.saveProduct(product);

    notificationService.notifyClients();

    cartBloc.onAddToCart(10);

})();
