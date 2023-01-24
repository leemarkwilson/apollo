// test/schedules.test.js

import _ from "lodash";
import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";

describe("store/schedules/schedules", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let NuxtStore;
  let store;

  beforeAll(async () => {
    const storePath = `${process.env.buildDir}/store.js`;
    NuxtStore = await import(storePath);
  });

  beforeEach(async () => {
    store = await NuxtStore.createStore();
  });
  // ...

  describe("scheduleIdSearch", () => {
    let firstId;
    beforeEach(() => {
      firstId = store.getters["schedules/schedules/firstIdSearch"];
    });
    test("This is the first ID returned", () => {
      expect(firstId).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: "000001",
          }),
        ])
      );
    });
  });

});
