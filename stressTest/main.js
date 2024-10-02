import http from 'k6/http';
import { check, sleep } from 'k6';

// Define the number of users and the number of requests per user per second
const users = 1000;
const requestsPerSecond = 25;

export const options = {
  scenarios: {
    my_scenario: {
      executor: 'per-vu-iterations',
      vus: users, // Number of virtual users
      iterations: users * requestsPerSecond, // Total number of iterations
      maxDuration: '30s', // Total duration of the test
    },
  },
};

export default function () {
 const headers = { 'Content-Type': 'application/json',
Authorization: `Bearer 133213`,
 };

  // Send the POST request
  http.get('https://example.com/endpoint', { headers });

  // Sleep to simulate time between requests
  sleep(1 / requestsPerSecond);
}
