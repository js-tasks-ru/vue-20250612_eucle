import { defineComponent, ref, watch } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const selectedMeetupId = ref(1)
    const meetupTitle = ref('')

    const fetchMeetup = async () => {
      const meetup = await getMeetup(selectedMeetupId.value)
      meetupTitle.value = meetup.title
    }

    watch(selectedMeetupId, fetchMeetup, { immediate: true })

    const selectPrevious = () => {
      if (selectedMeetupId.value > 1) selectedMeetupId.value--
    }

    const selectNext = () => {
      if (selectedMeetupId.value < 5) selectedMeetupId.value++
    }

    return {
      selectedMeetupId,
      meetupTitle,
      selectPrevious,
      selectNext,
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button 
          class="button button--secondary"
          type="button"
          :disabled="selectedMeetupId === 1"
          @click="selectPrevious"
        >
          Предыдущий
        </button>

        <div class="radio-group" role="radiogroup">
          <div v-for="id in 5" :key="id" class="radio-group__button">
            <input
              :id="'meetup-id-' + id"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="id"
              v-model="selectedMeetupId"
            />
            <label :for="'meetup-id-' + id" class="radio-group__label">{{ id }}</label>
          </div>
        </div>

        <button
          class="button button--secondary"
          type="button"
          :disabled="selectedMeetupId === 5"
          @click="selectNext"
        >
          Следующий
        </button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetupTitle }}</h1>
        </div>
      </div>

    </div>
  `,
})
