<template>
  <div class="commands__container clearfix overflow-hidden">
    <b-col class="px-0 mt-2 mx-3 bg-light w-100 main overflow-hidden">
      <b-jumbotron
        bg-variant="light"
        text-variant="dark"
        header="Fancy Mafia"
        lead="Help dialog for Fancy Mafia's FancyBot"
        container-fluid
        class="py-2"
      >
      </b-jumbotron>
      <hr class="w-90 my-4 border-dark" />
      <div role="tablist" class="px-md-3">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-3" role="tab">
            <h2 class="mb-0">
              <div class="d-flex justify-content-between align-items-center">
                <b-button href="#" v-b-toggle.accordion-1 variant="primary"
                  >FancyBot User Management Commands</b-button
                >
                <v-icon name="chevron-down" base-class="v-icon"></v-icon>
              </div>
            </h2>
          </b-card-header>
          <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <b-table hover :items="um_items" :fields="fields"></b-table>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-3" role="tab">
            <h2 class="mb-0">
              <div class="d-flex justify-content-between align-items-center">
                <b-button href="#" v-b-toggle.accordion-2 variant="primary"
                  >Queue Commands</b-button
                >
                <v-icon name="chevron-down" base-class="v-icon"></v-icon>
              </div>
            </h2>
          </b-card-header>
          <b-collapse
            id="accordion-2"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text>
                <b-table hover :items="queue_items" :fields="fields"></b-table>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-3" role="tab">
            <h2 class="mb-0">
              <div class="d-flex justify-content-between align-items-center">
                <b-button href="#" v-b-toggle.accordion-3 variant="primary"
                  >Split Commands</b-button
                >
                <v-icon name="chevron-down" base-class="v-icon"></v-icon>
              </div>
            </h2>
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <div
                  class="text-center d-flex align-items-center"
                  style="flex-direction: column;"
                >
                  <b-spinner type="grow" label="Coming soon..."></b-spinner>
                  Coming soon...
                </div>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </b-col>
  </div>
</template>
<script>
export default {
  mounted() {
    // because b-table doesn't support HTML tags in the field, this function goes through
    // and adds code tags to all of the examples in the tables
    const allCol_1 = document.querySelectorAll('td[aria-colindex="1"]');
    const allCol_3 = document.querySelectorAll('td[aria-colindex="3"]');
    for (var i = 0; i < allCol_1.length; i++) {
      allCol_1[i].innerHTML = `<code>${allCol_1[i].innerHTML}</code>`;
      allCol_3[i].innerHTML = `<code>${allCol_3[i].innerHTML}</code>`;
    }
  },
  data() {
    return {
      fields: [
        "command",
        "description",
        "example",
        {
          key: "admin_only",
          label: "Admins only",
          variant: "primary",
          tdClass: "text-center"
        }
      ],
      um_items: [
        {
          command: "*fbum add <RSN> <Discord ID>",
          description: "Add a user to the database",
          example: "*fbum add L-I-V-E-2DAY 174242274614444033",
          admin_only: "✓"
        },
        {
          command: "*fbum check <RSN>",
          description: "Retrieve user from the database",
          example: "*fbum check L-I-V-E-2DAY",
          admin_only: "✓"
        }
      ],
      queue_items: [
        {
          command: "*fbqueue [cox|tob]",
          description: "Queue for the supplied queue.",
          example: "*fbqueue cox",
          admin_only: "✗"
        },
        {
          command: "*fbcheck [cox|tob]",
          description: "Show the supplied Queue",
          example: "*fbcheck cox",
          admin_only: "✗"
        },
        {
          command: "*fbleave [cox|tob]",
          description: "Leave the supplied queue.",
          example: "*fbleave cox",
          admin_only: "✗"
        },
        {
          command: "*fbtake [cox|tob]",
          description: "Take the first member from the supplied queue.",
          example: "*fbtake cox",
          admin_only: "✓"
        },
        {
          command: "*fbremove [cox|tob] @<some_user>",
          description: "Removes the supplied user from the supplied queue.",
          example: "*fbremove cox @L-I-V-E-2DAY",
          admin_only: "✓"
        },
        {
          command: "*fbclearqueue [cox|tob]",
          description: "Clears the supplied queue.",
          example: "*fbclearqueue cox",
          admin_only: "✓"
        }
      ]
    };
  }
};
</script>

<style type="scss" scoped>
.commands__container {
  width: 100%;
  padding-right: 16px;
}

.jumbotron > h1 {
  font-family: "Permanent Marker", cursive;
}

.w-90 {
  width: 90%;
}

.v-icon {
  width: 24px;
}
</style>
