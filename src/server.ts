import app from './app';

const log = console.log;
const PORT = process.env.PORT || 3335;

app.listen(PORT, () => {
    log(`Server is starting at PORT: ${PORT}`);
});
