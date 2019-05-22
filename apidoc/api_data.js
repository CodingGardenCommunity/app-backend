define({ "api": [
  {
    "type": "post",
    "url": "/admin/seed",
    "title": "Seed all collections",
    "name": "SeedData",
    "group": "Admin",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "X-Admin-Secret",
            "description": "<p>Secret Key to seed DB.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/admin/admin.controller.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/contributors/:id",
    "title": "Get Contributor by ID",
    "name": "GetContributorByID",
    "group": "Contributor",
    "examples": [
      {
        "title": "Example Usage:",
        "content": "curl -i https://api-dev.coding.garden/contributors/:id",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Contributor's ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "response",
            "description": "<p>Contributor List.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.type",
            "description": "<p>Data Type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.id",
            "description": "<p>Record ID from DB.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.attributes",
            "description": "<p>Contributor Data.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.attributes.username",
            "description": "<p>Contributor ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.attributes.name",
            "description": "<p>Contributor Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.attributes.image",
            "description": "<p>Contributor Avatar URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.attributes.countryCode",
            "description": "<p>Contributor Country Code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "response.attributes.active",
            "description": "<p>Contributor Active.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "response.attributes.joined",
            "description": "<p>Contributor Joined Project.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "response.attributes.teamIds",
            "description": "<p>Contributor Project Teams.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/contributors/contributors.controller.js",
    "groupTitle": "Contributor"
  },
  {
    "type": "get",
    "url": "/contributors",
    "title": "Get all Contributors",
    "name": "GetContributors",
    "group": "Contributor",
    "examples": [
      {
        "title": "Example Usage:",
        "content": "curl -i https://api-dev.coding.garden/contributors",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "response",
            "description": "<p>Contributor List.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.type",
            "description": "<p>Data Type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.id",
            "description": "<p>Record ID from DB.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.attributes",
            "description": "<p>Contributor Data.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.attributes.username",
            "description": "<p>Contributor ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.attributes.name",
            "description": "<p>Contributor Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.attributes.image",
            "description": "<p>Contributor Avatar URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.attributes.countryCode",
            "description": "<p>Contributor Country Code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "response.attributes.active",
            "description": "<p>Contributor Active.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "response.attributes.joined",
            "description": "<p>Contributor Joined Project.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "response.attributes.teamIds",
            "description": "<p>Contributor Project Teams.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/contributors/contributors.controller.js",
    "groupTitle": "Contributor"
  }
] });
