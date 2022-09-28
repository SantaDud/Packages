const cars = (manufacturer, model_name, ...args) => {

    return {
        manufacturer: manufacturer,
        model: model_name,
        ...args
    }
}

console.log(cars("honda", "cd-70", color="yellow", optional_feature="headlights"));