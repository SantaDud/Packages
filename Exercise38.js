const describe_city = (c_name, country="Unknown") => {
    console.log(`${c_name} is in ${country}.`);
}

describe_city("karachi", "pakistan");
describe_city("Lahore", "pakistan");
describe_city("Islamabad");