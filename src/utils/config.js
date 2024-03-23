function formatOrder(data) {
  return data
    .map(
      (item) =>
        "Название: " +
        item.name +
        " Цена: " +
        item.price +
        " Кол-во x" +
        item.quantity +
        " Сумма: " +
        item.price * item.quantity
    )
    .join("\n");
}

export function formatParams(state) {
  return {
    name: state.user.name.value,
    phone: state.user.phone.value,
    email: state.user.email.value,
    city: state.selectValues["select-city"],
    hotel: state.selectValues["select-hotel"],
    event: state.selectValues["select-event"],
    other: state.selectValues["other-city"],
    order: formatOrder(state.order.order),
    comissionCost: state.order.comissionCost,
    totalCost: state.order.totalCost,
  };
}
