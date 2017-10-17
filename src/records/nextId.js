function* idMaker() {
  let id = 0;
  for (;;) {
    yield id++;
  }
}

const UID = idMaker();
export default (): number => UID.next().value;
