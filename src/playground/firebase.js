import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBli-eYXflRljF2PLPtLC7yPLAstiOdPqg",
  authDomain: "expensify-9934d.firebaseapp.com",
  databaseURL: "https://expensify-9934d.firebaseio.com",
  projectId: "expensify-9934d",
  storageBucket: "expensify-9934d.appspot.com",
  messagingSenderId: "794124216437"
};

firebase.initializeApp(config);

const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

const expense = {
  data: {
    title: 'Expense title',
    note: 'Expense note'
  }
};

database.ref('expenses').push(expense);

const expenses = [{
  description: 'Coffee',
  note: 'This is a note',
  amount: 1200,
  createdAt: 123
}, {
  description: 'Bill',
  note: 'This is a note',
  amount: 12000,
  createdAt:1212
}, {
  description: 'Food',
  note: 'This is a note',
  amount: 12090,
  createdAt: 7278
}, {
  description: 'Internet',
  note: 'This is a note',
  amount: 1000,
  createdAt: 72722
}];

expenses.map(expense => {
  database.ref('expenses').push(expense);
});

database.ref('expenses').once('value')
  .then(snapshot => {
    const expenseData = [];
    snapshot.forEach(childSnapshot => {
      expenseData.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });

    console.log(expenseData);
  })
  .catch(e => {
    console.log('Error', e);
  });

const onChange = database.ref('expenses').on('value', snapshot => {
  const expenses = [];
  snapshot.forEach(childSnapshot => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });

  console.log(expenses);
});



database.ref('notes').push({
  title: 'Second Todo',
  body: 'Watch DBS.'
});

database.ref('notes/-KzyLF5dTXD2vIEDwcOx').update({
  body: 'updated body'
});

const onValueChange = database.ref().on('value', snapshot => {
  console.log(snapshot.val());
}, e => {
  console.log('Error with data fetching', e);
});

setTimeout(() => {
  database.ref('age').set(22);
}, 3500);

setTimeout(() => {
  database.ref().off('value', onValueChange);
}, 7000);

setTimeout(() => {
  database.ref('age').set(24);
}, 10500);

const onNewChange = database.ref().on('value', snapshot => {
  const { name, job: { title, company } } = snapshot.val();
  console.log(`${name} is a ${title} at ${company}.`);
}, e => {
  console.log('Error in fetching data', e);
});

setTimeout(() => {
  database.ref().update({
    'job/title': 'Web Developer',
    'job/company': 'Facebook'
  });
}, 10000);

setTimeout(() => {
  database.ref().update({
    'job/title': 'Backend Developer',
    'job/company': 'Google'
  });
  database.ref().off('value', onNewChange);
}, 13000);

database.ref('location').once('value')
  .then(snapshot => {
    const val = snapshot.val();
    console.log(val);
  }).catch(e => {
    console.log('Error fetching data', e);
  });

database.ref().set({
  name: 'Mark',
  age: 20,
  stressLevel: 7,
  job: {
    title: 'Software Developer',
    company: 'Google'
  },
  location: {
    city: 'New York',
    country: 'United States'
  }
}).then(() => {
  console.log('data is saved');
}).catch(e => {
  console.log('This failed.', e);
});

database.ref('attributes').set({
  height: 69,
  weight: 60
}).then(() => {
  console.log('Attributes are added.')
}).catch(e => {
  console.log('Error', e);
});

database.ref('isSingle').remove()
  .then(() => {
    console.log('Data was removed');
  }).catch(e => {
    console.log('Did not remove data', e);
});

database.ref().update({
  name: 'Steve',
  age: '23',
  job: 'Software developer',
  isSingle: null
});

database.ref().update({
  job: 'Manager',
  'location/city': 'Boston'
});

database.ref().update({
  stressLevel: 9,
  'job/company': 'Google',
  'location/city': 'Seattle'
}).then(() => {
  console.log('Data updated');
}).catch(e => {
  console.log('Error:', e);
});
