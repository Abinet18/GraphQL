// 1
const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')
const { execute } = require('apollo-link');
const { WebSocketLink } =require('apollo-link-ws');
const {SubscriptionClient} = require('subscriptions-transport-ws');
// 2
const store = new Store(new RecordSource())

// 3
const fetchQuery=(operation, variables) => {
  // 4
  return fetch('http://localhost:8000/graphql', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization':localStorage.getItem("authToken")
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
};
const GRAPHQL_SUBSCRIPTION_ENDPOINT='ws://localhost:8000/subscriptions';
const subscriptionClient = new SubscriptionClient(GRAPHQL_SUBSCRIPTION_ENDPOINT, {
  reconnect: true,
});

const subscriptionLink = new WebSocketLink(subscriptionClient);

// Prepar network layer from apollo-link for graphql subscriptions
const networkSubscriptions = (operation, variables) =>
  execute(subscriptionLink, {
    query: operation.text,
    variables,
  });
// const setupSubscription= (config,variables,cacheConfig,observer)=> {
//   const query=config.text;
//   const subscriptionClient = new SubscriptionClient('ws://localhost:8000/subscriptions',{reconnect:true});
//   subscriptionClient.subscribe({query,variables}, (error,result)=> {
//     observer.onNext({data:result})
//   })
// }

const network = Network.create(fetchQuery,networkSubscriptions);


// 5
const environment = new Environment({
  network,
  store,
})

// 6
export default environment
