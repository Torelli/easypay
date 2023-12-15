export default function formatPrice(price) {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return USDollar.format(price);
}
