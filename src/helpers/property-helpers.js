import stringHelpers from "./string-helpers";

const sorting = (a, b) => {
    if (a.sort && b.sort) {
        return a.sort > b.sort ? 1 : -1;
    } else if (a.sort && !b.sort) {
        return -1
    } else if (!a.sort && b.sort) {
        return 1;
    }
    if (a.id && b.id) {
        if (a.id.length > b.id.length) {
        return 1;
        } else if (a.id.length < b.id.length) {
        return -1;
        } else {
        return a.id > b.id ? 1 : -1;
        }
    } else if (a.id && !b.id) {
        return -1;
    } else if (!a.id && b.id) {
        return 1;
    } else {
        return 0;
    }
}

const decorating = (property) => {
    let details = [];
    details.push(
        stringHelpers.pluralize(
            property.accommodates,
            "guest", "guests"
        )
    );
    details.push(
        stringHelpers.pluralize(
            property.bedrooms,
            "bedroom", "bedrooms"
        )
    );
    details.push(
        stringHelpers.pluralize(
            property.bathrooms,
            "bathroom", "bathrooms"
        )
    );
    property.postbids = 3;
    property.postBidsEndingDate = "Mar 11, 2021";
    property.leaseStartDate = "Mar 24, 2021";
    property.leaseEndDate = "Mar 30, 2021";

    property.pictures.sort(sorting);
    
    return {
        ...property,
        capacity: details.join("·"),
    };
}

export default {
    sorting,
    decorating
}

