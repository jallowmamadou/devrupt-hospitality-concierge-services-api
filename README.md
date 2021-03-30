# Guessenger Api

The guest messenger (Guessenger) is an Apaleo integration that connects the front desk/concierge services with an
already checked-in guest.

This is the api that serves the guest messenger app.

---

## Features

    - Email sending
    - A wrapper for apaleo api
    - Data storage

---

### Quickstart

1. Run `npm install`
2. Create an `.env` file based on `.env.example`
3. Run `npm start`

### Docker

1. Build docker image `docker build -t app .`
2. Start docker container `docker run -it -p 3000:3000 app`
3. Navigate to [http://localhost:3000](http://localhost:3000)

### How to update apaleo api proxy?

Grab the latest version of a `swagger.json` for any service that needs to be updated. The link to `swagger.json` file
can be found here:

- [apaleo Core API](https://api.apaleo.com/swagger)
- [apaleo Webhook API](https://webhook.apaleo.com/swagger)
- [apaleo UI Integration API](https://integration.apaleo.com/swagger)

Once you have the `swagger.json` locally, navigate to the `/clients/apaleo` folder and copy the file into the folder.
Then, pick the corresponding `autorest-{service}.yaml` and call autorest, for example:

```bash
autorest .\autorest-booking.yaml
```

Once the proxy is generated successfully - make sure you removed the `swagger.json` from the project.

### How to add a new apaleo api proxy?

Like the previous part, you will need to have a `swagger.json` file first and put it inside the folder
in `/clients/apaleo`. From that moment, everything is pretty straightforward. Just go to the folder and create a
new `autorest-{service}.yaml` file, based on any other configuration file there. And in this folder just run:

```bash
autorest .\autorest-{new_service}.yaml
```

## Demo Video

![Guessenger Video](https://eu.ui-avatars.com/api/?name=Guest+Messenger&background=0D8ABC&color=fff) https://www.loom.com/share/36d25d2771a54f6da768003410891bb7

## License

[MIT](https://choosealicense.com/licenses/mit/)
