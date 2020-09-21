let postingsData = JSON.parse(localStorage.getItem('postingsData'));

export function retrieveData() {
    return postingsData ? postingsData : [];
}

export function saveData(posting) {
    if (postingsData === null) {
        postingsData = [];
    }

    let counter = postingsData.length - 1;

    const newPosting = {
        id: ++counter,
        title: posting.title,
        content: posting.content,
        phoneNumber: posting.phoneNumber,
        city: posting.city
    };

    postingsData = [newPosting, ...postingsData];

    localStorage.setItem('postingsData', JSON.stringify(postingsData));
}

export function deleteData(id) {
    let lastIndex;

    for (let i = 0; i < postingsData.length; i++) {
        if (postingsData[i].id === id) {
            postingsData.splice(i, 1);
            lastIndex = i;
        }
    }

    for (let j = lastIndex; j < postingsData.length; j++) {
        postingsData[j].id--;
    }

    localStorage.setItem('postingsData', JSON.stringify(postingsData));

    return postingsData.length;
}
