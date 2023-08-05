package routers

import (
	"strings"

	"github.com/gofiber/fiber/v2"
)

func getmeta(route string, c *fiber.Ctx) string {
	MetaTitle := "Hello, Meta!"
	if route == "/" {
		MetaTitle = "Home"
	} else if route == "/features" {
		MetaTitle = "Features"
	} else if route == "/pricing" {
		MetaTitle = "Pricing"
	} else if route == "/post/:date/:title" {
		title := c.Query("title")
		// remove - and replace with space in title
		title = strings.ReplaceAll(title, "-", " ")
		MetaTitle = title
	}
	return MetaTitle
}

// Capitalize the first letter of the function name to export it
func RegisterRoutes(router fiber.Router) {
	router.Get("/", func(c *fiber.Ctx) error {
		MetaTitle := getmeta("/", c)
		return c.Render("index", fiber.Map{
			"Title":     "Hello, World!",
			"MetaTitle": MetaTitle,
		})
	})

	router.Get("/features", func(c *fiber.Ctx) error {
		MetaTitle := getmeta("features", c)
		return c.Render("features", fiber.Map{
			"MetaTitle": MetaTitle,
		})
	})

	router.Get("/pricing", func(c *fiber.Ctx) error {
		MetaTitle := getmeta("pricing", c)
		return c.Render("pricing", fiber.Map{
			"MetaTitle": MetaTitle,
		})
	})

	router.Get("/post/:date/:title", func(c *fiber.Ctx) error {
		date := c.Params("date")
		title := c.Params("title")
		// remove - and replace with space in title
		title = strings.ReplaceAll(title, "-", " ")
		return c.Render("post", fiber.Map{
			"Date":      date,
			"Title":     title,
			"MetaTitle": title,
		})
	})

	// component groups

	components := router.Group("/components")

	components.Get("/meta", func(c *fiber.Ctx) error {
		route := c.Query("route")
		MetaTitle := getmeta(route, c)
		return c.Render("partials/meta", fiber.Map{
			"MetaTitle": MetaTitle,
		})
	})

	components.Get("/header", func(c *fiber.Ctx) error {
		//  header.component.html = header.component
		return c.Render("components/headers/header.component", fiber.Map{
			"Title": "Hello, Header!",
		})
	})

	components.Get("/footer", func(c *fiber.Ctx) error {
		//  footer.component.html = footer.component
		return c.Render("components/footers/footer.component", fiber.Map{
			"Title": "Hello, Footer!",
		})
	})

	components.Get("/home", func(c *fiber.Ctx) error {
		// home.component.html = home.component
		return c.Render("components/home.component", fiber.Map{})
	})

	components.Get("/features", func(c *fiber.Ctx) error {

		// features.component.html = features.component
		return c.Render("components/features.component", fiber.Map{})
	})
	components.Get("/pricing", func(c *fiber.Ctx) error {

		// pricing.component.html = pricing.component
		return c.Render("components/pricing.component", fiber.Map{})
	})
	components.Get("/post", func(c *fiber.Ctx) error {
		date := c.Query("date")
		title := c.Query("title")
		// remove - and replace with space in title
		title = strings.ReplaceAll(title, "-", " ")
		// pricing.component.html = pricing.component
		return c.Render("components/post.component", fiber.Map{
			"Date":  date,
			"Title": title,
		})
	})
}
