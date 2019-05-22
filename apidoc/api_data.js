define({ "api": [
  {
    "type": "get",
    "url": "/contributors/",
    "title": "Get all Contributors",
    "name": "GetContributors",
    "group": "Contributor",
    "examples": [
      {
        "title": "Example Usage:",
        "content": "curl -i https://api-dev.coding.garden/contributors",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Data Type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Record ID in DB.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "attributes",
            "description": "<p>Contributor Data.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attributes.username",
            "description": "<p>Contributor ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attributes.name",
            "description": "<p>Contributor Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attributes.image",
            "description": "<p>Contributor Avatar URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attributes.countryCode",
            "description": "<p>Contributor Country Code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "attributes.active",
            "description": "<p>Contributor Active.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "attributes.joined",
            "description": "<p>Contributor Joined Project.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "attributes.teamIds",
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
