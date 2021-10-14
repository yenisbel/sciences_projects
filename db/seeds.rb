9.times do |i|
    Project.create(
        name: "Project #{i + 1}",
        materials: "2-3 cups of sugar, 1 cup of water, skewers, a jar or glass, a large saucepan, clothespins, food coloring(optional)",
        instruction:"Combine equal parts of sugar and water in a saucepan, heat until all of the sugar is dissolved, slowly add more sugar and mix, cut the skewers to a desirable size, once your sugar-water is cool pour it into jars, once the sticks are dry place them into the jar, after a week your rock candy can be removed from the jars and enjoyed"
    )
end


