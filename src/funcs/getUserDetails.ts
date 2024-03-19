export default function getUserDetails(endpoint: string, id: number) {
    const response = fetch(`${endpoint}${id}.json`);

    return response;
}